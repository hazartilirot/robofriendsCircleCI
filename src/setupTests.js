import Enzyme from 'enzyme';
/*unofficial adapter*/
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });