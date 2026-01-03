import { buildConfig } from 'payload/config'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'

import { Users } from './collections/Users'
import { Articles } from './collections/Articles'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- blog-pre-pack',
    },
  },
  editor: slateEditor({}),
  collections: [Users, Articles, Categories, Media],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgresql://prepack:prepack_secret@localhost:5438/prepack_cms',
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  cors: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3012'],
  csrf: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3012'],
})
