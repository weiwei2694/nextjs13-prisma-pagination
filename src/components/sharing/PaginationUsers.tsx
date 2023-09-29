"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Props {
  totalPage: number;
  currentPage: number;
}

const PaginationUsers = ({ totalPage, currentPage }: Props) => {
  const router = useRouter()

  return (
    <section className="flex items-center justify-center gap-x-6 mt-3 sm:mt-6">
      <Button
        variant="secondary"
        size="icon"
        onClick={() => router.push(`/?page=${currentPage - 1}`)}
        disabled={currentPage === 0}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        onClick={() => router.push(`/?page=${currentPage + 1}`)}
        disabled={totalPage === currentPage}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </section>
  )
}

export default PaginationUsers