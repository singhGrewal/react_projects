import QRCode from "react-qr-code";
import {useState} from "react";

export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [value, setValue] = useState('')

    const handleQrCodeGenerator = () => {
        setQrCode(qrCode)
        setValue('')
    }

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    }}>
        <h1>QR Code Generator</h1>
        <div className="qrcode__input">
            <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                name="qr-code"
                value={value}
                placeholder="Enter your value here"
            />

            <button disabled={!(value && value.trim() !== "")} onClick={handleQrCodeGenerator}>Generate QR
                Code
            </button>
        </div>
        <div style={{height: "auto", margin: "0 auto" , width: "100%",  marginTop:"20px"}}>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
        </div>
    </div>
}
