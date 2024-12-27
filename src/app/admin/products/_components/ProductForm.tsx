"use client";

import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export function ProductForm() {
  const [priceInCents, setPriceInCents] = useState<number>();
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Price in Cents</Label>
        <input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div></div>
      </div>
    </form>
  );
}
