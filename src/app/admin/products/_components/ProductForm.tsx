"use client";

import { Label } from "@radix-ui/react-label";

export function ProductForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Price in Cents</Label>
        <input type="text" id="priceInCents" name="priceInCents" required />
      </div>
    </form>
  );
}
