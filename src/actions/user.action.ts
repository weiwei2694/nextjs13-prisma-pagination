import { getUsersActionProps } from "@/interfaces/user.interface";
import db from "@/lib/db";
import { User } from "@prisma/client";

export const getUsersAction = async ({
	page = 0,
	size = 10,
}: getUsersActionProps) => {
	try {
		const skip = size * page;

		let result: User[],
			resultCount: number,
			totalPage: number;

		if (!skip) {
			result = await db.user.findMany({
				take: size
			})

			resultCount = await db.user.count();
		} else {
			result = await db.user.findMany({
				skip,
				take: size,
			});

			resultCount = await db.user.count({ skip });
		}
		
		totalPage = Math.ceil(resultCount / size);

		return {
			data: result,
			totalPage,
			totalData: resultCount
		};
	} catch (error) {
		console.error("[ERROR_GET_USERS_ACTION]", error);
	}
};
