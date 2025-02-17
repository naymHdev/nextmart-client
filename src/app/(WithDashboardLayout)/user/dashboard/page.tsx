const UserDashboard = () => {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-primary" />
        <div className="aspect-video rounded-xl bg-primary" />
        <div className="aspect-video rounded-xl bg-primary" />
      </div>
      <div className="min-h-[100vh] rounded-xl bg-primary mt-4" />
    </>
  );
};

export default UserDashboard;
