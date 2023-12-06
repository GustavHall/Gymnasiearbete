import { map } from "nanostores";

export const form = map({});

export function updateForm({ id = "", user }) {
  const existingEntry = form.get()[id];
  if (existingEntry) {
    form.setKey(id, {
      ...form,
    });
  } else {
    form.setKey(id, { id, ...user });
  }
}
