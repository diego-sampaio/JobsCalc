let job = [
  {
    id: 1,
    name: "Pizzaria",
    "daily-hours": 8,
    "total-hours": 40,
    createdAt: Date.now() 
  },
  {
    id: 2,
    name: "OneTwo",
    "daily-hours": 8,
    "total-hours": 60,
    createdAt: Date.now() 
  }
];

module.exports = {
  get() {
    return job;
  },

  update(newJob) {
    job = newJob;
  },

  delete(id) {
    job = job.filter(job => Number(job.id) !== Number(id));
  }
}