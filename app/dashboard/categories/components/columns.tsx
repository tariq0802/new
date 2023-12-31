"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";
import MyImage from "@/components/image";

export type CategoryColumn = {
  id: string;
  slug: string;
  label: string;
  image: string | null;
  description: string | null;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="relative w-20 h-14">
        {row.original.image && (
          <MyImage src={row.original.image} alt="Category Image" fill />
        )}
      </div>
    ),
  },
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
