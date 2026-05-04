import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission, createJobApplication } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  forms: router({
    submitContact: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, "Full name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().min(1, "Phone number is required"),
          subject: z.string().min(1, "Subject is required"),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createContactSubmission({
            fullName: input.fullName,
            email: input.email,
            phone: input.phone,
            subject: input.subject,
            message: input.message,
          });
          return { success: true, message: "Thank you for contacting us!" };
        } catch (error) {
          console.error("Error submitting contact form:", error);
          throw new Error("Failed to submit contact form");
        }
      }),

    submitJobApplication: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, "Full name is required"),
          dateOfBirth: z.string().min(1, "Date of birth is required"),
          cnic: z.string().min(1, "CNIC is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().min(1, "Phone number is required"),
          address: z.string().min(1, "Address is required"),
          positionAppliedFor: z.string().min(1, "Position is required"),
          hasDrivingLicense: z.enum(["yes", "no"]),
          declarationAgreed: z.boolean(),
        })
      )
      .mutation(async ({ input }) => {
        if (!input.declarationAgreed) {
          throw new Error("You must agree to the declaration to proceed");
        }

        try {
          await createJobApplication({
            fullName: input.fullName,
            dateOfBirth: input.dateOfBirth,
            cnic: input.cnic,
            email: input.email,
            phone: input.phone,
            address: input.address,
            positionAppliedFor: input.positionAppliedFor,
            hasDrivingLicense: input.hasDrivingLicense,
            declarationAgreed: input.declarationAgreed ? 1 : 0,
          });
          return { success: true, message: "Your application has been submitted successfully!" };
        } catch (error) {
          console.error("Error submitting job application:", error);
          throw new Error("Failed to submit job application");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
