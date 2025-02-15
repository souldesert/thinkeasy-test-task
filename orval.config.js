const config = {
  api: {
    input: 'https://frontend-test-be.stage.thinkeasy.cz/api-json',
    output: {
      workspace: './src/app/api',
      mode: 'tags-split',
      target: '.',
      schemas: './_models',
      client: 'axios',
      override: {
        mutator: {
          path: './axios.ts',
          name: 'axiosInstance',
        },
      },
    },
  },
}

export default config
