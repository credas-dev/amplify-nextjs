import Amplify, { withSSRContext } from 'aws-amplify'
import config from "../../src/aws-exports.js"

// Amplify SSR configuration needs to be enabled within each API route
Amplify.configure({ ...config, ssr: true })


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
