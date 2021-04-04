let profile = {
  name: "Diego",
  avatar: "https://github.com/diego-sampaio.png",
  "monthly-budget": 3000,
  "hours-per-day": 8,
  "days-per-week": 5,
  "vacation-per-year": 4,
  "value-hour": 75
};

module.exports = {
  get() {
    return profile;
  },

  update(newProfile) {
    profile = newProfile;
  }
};