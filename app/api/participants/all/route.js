import connectToDb from '@utils/connectToDb'
import Participant from '@models/Participant'
export const dynamic = 'force-dynamic';
// export const fetchCache ='only-no-store';
export async function GET  ()  {
    try {
        await connectToDb()
        const allParticipants = await Participant.find()
        // console.log(allParticipants, ' inside GET')
        return new Response(JSON.stringify({allParticipants,success: true, status: 200}))
        
    } catch (error) {
        console.log(error, ' error in route GET');
        return new Response(JSON.stringify({error}), {success: false, status:405})

    }

}
