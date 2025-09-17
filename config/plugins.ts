module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        authType: "default",
        account: env("AZURE_STORAGE_ACCOUNT"),
        accountKey: env("AZURE_STORAGE_ACCOUNT_KEY"), // Use account key for uploads
        sasToken: env("AZURE_STORAGE_ACCOUNT_SAS_TOKEN"), // Use SAS token for URL generation
        containerName: env("AZURE_STORAGE_CONTAINER_NAME"),
        defaultPath: "assets",
        sas: true, // Enable SAS for URL generation
        publicAccessType: 'blob',
        serviceBaseURL: `https://${env('AZURE_STORAGE_ACCOUNT')}.blob.core.windows.net/`,
      },
    },
  },
});