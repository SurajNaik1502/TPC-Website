let APP_ID = "7ce1924a60ae4545b104f3b63cf9b630"

let token = null;
let uid = String(Math.floor(Math.random()*10000))

let client;
let channel;

let localStream;
let remoteStream;
let peerConnection;
const servers ={
    iceServers:[
        {
            urls:['stun:stun1.l.google.com:19302','stun:stun2.l.google.com:19302']
        }
    ]
}


let init = async () =>{ 
    client = await AgoraRTM.createInstance(APP_ID)
    await client.login({uid, token})
        //index.html?room=32342
        channel = client.createChannel('main')
        await channel.join()
    
        channel.on('MemberJoined',handleUserJoined)

    localStream = await navigator.mediaDevices.getUserMedia({video:true,audio:false})
    document.getElementById('user-1').srcObject = localStream
    createOffer()
}

let handleUserJoined = async (MemberId) =>
{
    console.log('A new user has joined the channel:',MemberId)
}
let createOffer = async() => {
    peerConnection = new RTCPeerConnection(servers)

    remoteStream = new MediaStream()
    document.getElementById('user-2').srcObject = remoteStream

    localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track,localStream)
        
    })

    peerConnection.ontrack = (event) => {
        event.streams[0].getTrack().forEach((track)=>{
            remoteStream.addTrack(track)
        })
    }

    peerConnection.onicecandidate = async (event) =>
    {
        if(event.candidate){
            console.log('New ICE candidate:',event.candidate)
        }
    }



    let offer = await peerConnection.createOffer()
    
    await peerConnection.setLocalDescription(offer)
    console.log('Offer:', offer)
}
init()