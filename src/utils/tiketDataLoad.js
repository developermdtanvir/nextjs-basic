import fsPromises from 'fs/promises';
import path from 'path';



const tiketDataLoad = async () => {

    const filePath = path.join(process.cwd(), 'ticket.json');

    const jsonData = await fsPromises.readFile(filePath);

    return JSON.parse(jsonData);

}

export default tiketDataLoad