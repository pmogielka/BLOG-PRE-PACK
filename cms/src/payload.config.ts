import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users.js'
import { Articles } from './collections/Articles.js'
import { Categories } from './collections/Categories.js'
import { Media } from './collections/Media.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- PrePack CMS',
    },
  },
  editor: lexicalEditor({}),
  collections: [Users, Articles, Categories, Media],
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-min-32-characters',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgresql://prepack:prepack_secret@localhost:5438/prepack_cms',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  cors: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3012'],
  csrf: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3012'],
})
