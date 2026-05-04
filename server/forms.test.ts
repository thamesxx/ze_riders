import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import * as db from "./db";

// Mock the database module
vi.mock("./db", () => ({
  createContactSubmission: vi.fn(),
  createJobApplication: vi.fn(),
}));

describe("Form Submission Procedures", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("forms.submitContact", () => {
    it("should successfully submit a contact form with valid data", async () => {
      const mockCreateContactSubmission = vi.mocked(db.createContactSubmission);
      mockCreateContactSubmission.mockResolvedValueOnce({ insertId: 1 } as any);

      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.forms.submitContact({
        fullName: "John Doe",
        email: "john@example.com",
        phone: "+92 314 2560770",
        subject: "Inquiry",
        message: "I would like to know more about your services.",
      });

      expect(result.success).toBe(true);
      expect(result.message).toBe("Thank you for contacting us!");
      expect(mockCreateContactSubmission).toHaveBeenCalledWith({
        fullName: "John Doe",
        email: "john@example.com",
        phone: "+92 314 2560770",
        subject: "Inquiry",
        message: "I would like to know more about your services.",
      });
    });

    it("should reject contact form with invalid email", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      await expect(
        caller.forms.submitContact({
          fullName: "John Doe",
          email: "invalid-email",
          phone: "+92 314 2560770",
          subject: "Inquiry",
          message: "Test message",
        })
      ).rejects.toThrow();
    });

    it("should reject contact form with missing required fields", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      await expect(
        caller.forms.submitContact({
          fullName: "",
          email: "john@example.com",
          phone: "+92 314 2560770",
          subject: "Inquiry",
          message: "Test message",
        })
      ).rejects.toThrow();
    });

    it("should handle database errors gracefully", async () => {
      const mockCreateContactSubmission = vi.mocked(db.createContactSubmission);
      mockCreateContactSubmission.mockRejectedValueOnce(
        new Error("Database connection failed")
      );

      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      await expect(
        caller.forms.submitContact({
          fullName: "John Doe",
          email: "john@example.com",
          phone: "+92 314 2560770",
          subject: "Inquiry",
          message: "Test message",
        })
      ).rejects.toThrow("Failed to submit contact form");
    });
  });

  describe("forms.submitJobApplication", () => {
    it("should successfully submit a job application with valid data", async () => {
      const mockCreateJobApplication = vi.mocked(db.createJobApplication);
      mockCreateJobApplication.mockResolvedValueOnce({ insertId: 1 } as any);

      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.forms.submitJobApplication({
        fullName: "Jane Smith",
        dateOfBirth: "1990-05-15",
        cnic: "12345-6789012-3",
        email: "jane@example.com",
        phone: "+92 300 1234567",
        address: "123 Main Street, Karachi",
        positionAppliedFor: "Rider",
        hasDrivingLicense: "yes",
        declarationAgreed: true,
      });

      expect(result.success).toBe(true);
      expect(result.message).toBe(
        "Your application has been submitted successfully!"
      );
      expect(mockCreateJobApplication).toHaveBeenCalledWith({
        fullName: "Jane Smith",
        dateOfBirth: "1990-05-15",
        cnic: "12345-6789012-3",
        email: "jane@example.com",
        phone: "+92 300 1234567",
        address: "123 Main Street, Karachi",
        positionAppliedFor: "Rider",
        hasDrivingLicense: "yes",
        declarationAgreed: 1,
      });
    });

    it("should reject job application without declaration agreement", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      await expect(
        caller.forms.submitJobApplication({
          fullName: "Jane Smith",
          dateOfBirth: "1990-05-15",
          cnic: "12345-6789012-3",
          email: "jane@example.com",
          phone: "+92 300 1234567",
          address: "123 Main Street, Karachi",
          positionAppliedFor: "Rider",
          hasDrivingLicense: "yes",
          declarationAgreed: false,
        })
      ).rejects.toThrow("You must agree to the declaration to proceed");
    });

    it("should reject job application with invalid email", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      await expect(
        caller.forms.submitJobApplication({
          fullName: "Jane Smith",
          dateOfBirth: "1990-05-15",
          cnic: "12345-6789012-3",
          email: "invalid-email",
          phone: "+92 300 1234567",
          address: "123 Main Street, Karachi",
          positionAppliedFor: "Rider",
          hasDrivingLicense: "yes",
          declarationAgreed: true,
        })
      ).rejects.toThrow();
    });

    it("should reject job application with missing required fields", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      await expect(
        caller.forms.submitJobApplication({
          fullName: "",
          dateOfBirth: "1990-05-15",
          cnic: "12345-6789012-3",
          email: "jane@example.com",
          phone: "+92 300 1234567",
          address: "123 Main Street, Karachi",
          positionAppliedFor: "Rider",
          hasDrivingLicense: "yes",
          declarationAgreed: true,
        })
      ).rejects.toThrow();
    });

    it("should handle database errors gracefully", async () => {
      const mockCreateJobApplication = vi.mocked(db.createJobApplication);
      mockCreateJobApplication.mockRejectedValueOnce(
        new Error("Database connection failed")
      );

      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      await expect(
        caller.forms.submitJobApplication({
          fullName: "Jane Smith",
          dateOfBirth: "1990-05-15",
          cnic: "12345-6789012-3",
          email: "jane@example.com",
          phone: "+92 300 1234567",
          address: "123 Main Street, Karachi",
          positionAppliedFor: "Rider",
          hasDrivingLicense: "yes",
          declarationAgreed: true,
        })
      ).rejects.toThrow("Failed to submit job application");
    });
  });
});
