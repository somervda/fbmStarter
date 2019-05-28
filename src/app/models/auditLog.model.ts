export interface AuditLog {
  type: string;
  docId: string;
  collection: string;
  fieldName: string;
  newValue;
  uid: string;
  dateCreated: Date;
}
