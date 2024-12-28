"use client";

import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formatters";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export function ProductForm() {
  const [priceInCents, setPriceInCents] = useState<number>();
  return (
    <form className="space-y-8 p-5">
      <div className="space-y-2 flex flex-col">
        <Label htmlFor="name">Name</Label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="space-y-2 flex flex-col">
        <Label htmlFor="name">Price in Cents</Label>
        <input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
      </div>
      <div className="space-y-2 flex flex-col">
        <Label htmlFor="file">File</Label>
        <input type="file" id="file" name="file" required />
      </div>
      <div className="space-y-2 flex flex-col">
        <Label htmlFor="file">Image</Label>
        <input type="file" id="image" name="image" required />
      </div>
    </form>
  );
}
