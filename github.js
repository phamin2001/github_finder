class GitHub {
  constructor() {
    this.client_id = '7acf005957020c2aecf2';
    this.client_secret = 'eb33e4a9ba2f57fa7e8ac003381e5ca91ef058f9';
  }

  // Get User
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile // profile: profile
    };
  }
}
