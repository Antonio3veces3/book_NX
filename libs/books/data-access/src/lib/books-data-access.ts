import { InterfaceBook } from '../../../../shared-models/src/lib/shared-models';

export async function getBooks(): Promise<InterfaceBook[]> {
  const data = await fetch('/api/books', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.json();
}
