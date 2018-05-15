import { Router } from 'express';
import { sendAppPage } from '../controllers';
import ConfigureStore from '../../client/store';
import App from '../../client/App';


const router = Router();

router.get('/', sendAppPage(App, ConfigureStore()));

export default router;