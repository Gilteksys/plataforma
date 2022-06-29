import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({

    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ukavi1104701uk4phoczij/master',
    cache: new InMemoryCache()

})