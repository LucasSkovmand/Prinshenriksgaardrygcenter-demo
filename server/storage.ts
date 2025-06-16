import { contactSubmissions, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private submissions: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.submissions = new Map();
    this.currentId = 1;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const submission: ContactSubmission = {
      id,
      name: insertSubmission.name,
      email: insertSubmission.email,
      phone: insertSubmission.phone || null,
      treatmentType: insertSubmission.treatmentType || null,
      message: insertSubmission.message,
      createdAt: new Date(),
    };
    this.submissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.submissions.values());
  }
}

export const storage = new MemStorage();
