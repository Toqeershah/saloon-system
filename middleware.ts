export {default} from 'next-auth/middleware'

export const config = {
    matcher: [
        '/saloons/new',
        '/saloons/edit/:id+',
    ]
}