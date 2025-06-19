const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
const positions = ['Manager', 'Developer', 'Analyst', 'Coordinator', 'Specialist', 'Director'];
const statuses = ['Active', 'Inactive', 'Pending', 'On Leave'];
const locations = ['New York', 'San Francisco', 'London', 'Tokyo', 'Berlin', 'Remote'];

const generateRandomName = () => {
  const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Chris', 'Emma', 'Alex', 'Maria'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

const generateRandomEmail = (name) => {
  const domain = ['company.com', 'business.org', 'enterprise.net'];
  return `${name.toLowerCase().replace(' ', '.')}@${domain[Math.floor(Math.random() * domain.length)]}`;
};

const generateRandomPhone = () => {
  return `+1-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`;
};

const generateRandomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
};

export const generateMockData = (count = 100) => {
  return Array.from({ length: count }, (_, index) => {
    const name = generateRandomName();
    return {
      key: index + 1,
      id: index + 1,
      name,
      email: generateRandomEmail(name),
      phone: generateRandomPhone(),
      company: `Company ${Math.floor(Math.random() * 50) + 1}`,
      position: positions[Math.floor(Math.random() * positions.length)],
      department: departments[Math.floor(Math.random() * departments.length)],
      salary: Math.floor(Math.random() * 150000) + 40000,
      startDate: generateRandomDate(),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      manager: generateRandomName(),
      projects: Math.floor(Math.random() * 10) + 1,
    };
  });
};