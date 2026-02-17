import React, { useState } from 'react';

const BANK_DATA = {
    "HDFC Bank": ["HDFC0001234", "HDFC0005678"],
    "ICICI Bank": ["ICIC0001111", "ICIC0002222"],
    "SBI": ["SBIN0000123", "SBIN0000456"],
};

const BANK_UPI = {
    "HDFC Bank": "hdfc@upi",
    "ICICI Bank": "icici@upi",
    "SBI": "sbi@upi",
};
function IpoForm() {
    const [formData, setFormData] = useState({
        panNumber: "",
        gender: "male",
        dob: "",
        bankName: "",
        ifscCode: "",
        accountNumber: "",
        shares: 100,
        lots: 1,
        upiId: "",
    });


    const panError = formData.panNumber && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber.toUpperCase())
        ? "Invalid PAN format (e.g., ABCDE1234F)"
        : "";

    const accError = formData.accountNumber && !/^\d{9,18}$/.test(formData.accountNumber)
        ? "Account number must be 9-18 digits"
        : "";

    const bidAmount = formData.shares * formData.lots;

    const isFormInvalid =
        !formData.panNumber ||
        !formData.accountNumber ||
        !formData.bankName ||
        !formData.dob ||
        panError ||
        accError;

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "panNumber") value = value.toUpperCase();
        const updatedData = { ...formData, [name]: value };
        if (name === "bankName") updatedData.ifscCode = "";
        updatedData.upiId = value ? `@${BANK_UPI[value].split('@')[1]}` : "";

        setFormData(updatedData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert('FORM SUBMITTED SUCCESSFULLY!');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
            <h1>IPO Bidding Information</h1>
            <form onSubmit={handleSubmit}>

                <h3>Personal Information:</h3>
                <label>
                    Pan Number:
                    <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        placeholder="ABCDE1234J"
                        onChange={handleChange}
                    />
                </label>
                {panError && <p style={{ color: 'red', fontSize: '12px', margin: '4px 0' }}>{panError}</p>}

                <br />
                <label style={{ display: 'block', marginTop: '10px' }}>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <br />
                <label style={{ display: 'block', marginTop: '10px' }}>Date of Birth:</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

                <hr />

                <h3>Bank Information:</h3>
                <label>Bank Name:</label>
                <select name="bankName" value={formData.bankName} onChange={handleChange} required>
                    <option value="">-- Select Bank --</option>
                    {Object.keys(BANK_DATA).map(bank => (
                        <option key={bank} value={bank}>{bank}</option>
                    ))}
                </select>

                <br />
                <label style={{ display: 'block', marginTop: '10px' }}>IFSC Code:</label>
                <select
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleChange}
                    disabled={!formData.bankName}
                    required
                >
                    <option value="">-- Select IFSC --</option>
                    {formData.bankName && BANK_DATA[formData.bankName].map(ifsc => (
                        <option key={ifsc} value={ifsc}>{ifsc}</option>
                    ))}
                </select>

                <br />
                <label style={{ display: 'block', marginTop: '10px' }}>
                    Account Number:
                    <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                {accError && <p style={{ color: 'red', fontSize: '12px', margin: '4px 0' }}>{accError}</p>}

                <hr />

                <h3>Investment Information:</h3>
                <p>Min order value: ₹1000 | Lot size: 100 shares</p>

                <label>
                    Shares (Lot Size):
                    <input type="number" name="shares" value={formData.shares} readOnly disabled />
                </label>

                <label style={{ display: 'block', marginTop: '10px' }}>
                    Number of Lots (1-10):
                    <input
                        type="number"
                        name="lots"
                        min="1"
                        max="10"
                        value={formData.lots}
                        onChange={handleChange}
                    />
                </label>

                <label style={{ display: 'block', marginTop: '10px', fontWeight: 'bold' }}>
                    Total Bid Amount:
                    <input type="number" value={bidAmount} disabled />
                </label>

                <label style={{ display: 'block', marginTop: '10px' }}>
                    UPI ID:
                    <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleChange}
                        placeholder="username@bank"
                        required
                    />
                </label>
                <p style={{ fontSize: '11px', color: '#666' }}>
                    {formData.bankName ? `Format for ${formData.bankName}: username@${BANK_UPI[formData.bankName].split('@')[1]}` : "Select a bank to see UPI format"}
                </p>

                <button
                    type="submit"
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        cursor: isFormInvalid ? 'not-allowed' : 'pointer',
                        backgroundColor: isFormInvalid ? '#ccc' : '#4CAF50',
                        color: 'white',
                        border: 'none'
                    }}
                    disabled={isFormInvalid}
                >
                    Submit Bid
                </button>
            </form>
        </div>
    );
}

export default IpoForm;