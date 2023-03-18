import {deleteAsync} from 'del'

export default () => {
	return deleteAsync(app.path.clean)
}