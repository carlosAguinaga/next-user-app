import { useRouter } from 'next/router';
import MainLayout from '../../components/mainLayout';

const User = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={user.avatar}
                alt={user.first_name + ' ' + user.last_name}
                style={{ borderRadius: '50%' }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.id}. {user.first_name} {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default User;

export async function getServerSideProps(ctx) {
  // console.log(ctx.query.id)
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  // console.log(resJSON);
  return {
    props: {
      user: resJSON.data,
    },
  };
}
