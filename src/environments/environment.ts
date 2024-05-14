export const environment = {
    production : false
}

export const SpotifyConfiguration = {
    clientId : '9afb693b6de942029e808c3598f7d7d1',
    authEndPoint : "https://accounts.spotify.com/authorize",
    redirectUrl : "http://localhost:4200/login",
    scopes : [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-library-read",
        "playlist-read-private",
        "playlist-read-collaborative"
    ]
}