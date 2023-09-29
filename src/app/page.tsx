import { getUsersAction } from '@/actions/user.action'
import Users from '@/components/home/Users';
import PaginationUsers from '@/components/sharing/PaginationUsers';
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface Props {
  searchParams: {
    page: string;
  }
}

const Page = async ({ searchParams }: Props) => {
  const page = Number(searchParams.page) || 0

  const users = await getUsersAction({ page, size: 10 }),
    isUsersEmpty = !users;

  return (
    <main className="max-w-4xl mx-auto mt-10 sm:mt-16 md:mt-24 px-6 sm:px-0">
      {isUsersEmpty ? <p>There's no users</p> : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.data.map((user) => (
                <Users
                  key={user.email}
                  name={user.name}
                  email={user.email}
                />
              ))}
            </TableBody>
          </Table>
          <PaginationUsers
            currentPage={page}
            totalPage={users.totalPage}
          />
        </>
      )}
    </main>
  )
}

export default Page