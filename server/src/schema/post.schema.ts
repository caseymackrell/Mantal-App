import {object, number, string, TypeOf} from 'zod'


const payload = {
body: object({
    image: string({
        required_error: "Image is required"
    }),
    description: string({
        required_error: "Description is required"
    })
})
}


const params = {
    params: object({
        postId: string({
            required_error: "postId is required"
        })
    })
}


export const createPostSchema = object({
    ...payload
})


export const updatePostSchema = object({
    ...payload,
    ...params
})

export const deletePostSchema = object({
    ...params
})

export const getPostSchema = object({
    ...params
})

export type createPostInput = TypeOf<typeof createPostSchema>
export type updatePostInput = TypeOf<typeof updatePostSchema>
export type getPostInput = TypeOf<typeof getPostSchema>
export type deletePostInput = TypeOf<typeof deletePostSchema>