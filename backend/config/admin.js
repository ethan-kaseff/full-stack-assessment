module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0a0b2ec244bb62904924d8069e8c8875'),
  },
});
