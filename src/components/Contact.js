import { Link,Outlet } from 'react-router-dom';
const Contact = () => {
    return (
        <>
          <p>Contact</p>
    
          <nav>
            <ul>
            <li><Link to="us">US</Link></li>
            <li><Link to="pl">PL</Link></li>
            <li><Link to="de">DE</Link></li>
            </ul>
          </nav>
          <Outlet />
        </>
    );
}
export default Contact;
