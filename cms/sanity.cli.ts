import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.Sanity_project_id as string,
    dataset: process.env.Sanity_dataset as string
  }
})
