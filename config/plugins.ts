module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        authType: env("STORAGE_AUTH_TYPE", "default"),
        account: env("AZURE_STORAGE_ACCOUNT"),
        accountKey: env("AZURE_STORAGE_ACCOUNT_KEY"),//either account key or sas token is enough to make authentication 
        // sasToken: env("STORAGE_ACCOUNT_SAS_TOKEN"),
        containerName: env("AZURE_STORAGE_CONTAINER_NAME"),
        publicAccessType: 'blob', // optional ('blob' | 'container')
        defaultPath: "assets",
        cdnBaseURL: env("AZURE_CDN_URL"),
      },
    },
  },
});