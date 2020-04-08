export const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const MOBILE_PATTERN = '^[0-9]{10}+$';

export class ValidationMessages {
    public static validationErrorMessages = {
        'username': [
            { type: 'required', message: 'Email/Mobile Number Required' },
            { type: 'validUsernameEmail', message: 'Username must be valid Email' },
            { type: 'validUsernameMobile', message: 'Username must be valid Mobile Number' }
        ],
        'password': [
            { type: 'required', message: 'Password Required' },
            { type: 'pattern', message: 'Password as invalid pattern' },
            { type: 'minlength', message: 'Password must have minimum 8 characters' }
        ],
        'otp': [
            { type: 'required', message: 'OTP is required' },
            { type: 'pattern', message: 'OTP is always numerical' },
            { type: 'minlength', message: 'OTP must contain 6 digits' }
        ],
        'fullname': [
            { type: 'required', message: 'Full name is required' },
            { type: 'pattern', message: "Name shouldn't have special characters" }
        ],
        'email': [{ type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Email is Invalid' }],
        'phone': [
            { type: 'required', message: 'Phone is required' },
            { type: 'validCountryPhone', message: 'Incorrect phone for selected country ' },
            { type: 'pattern', message: 'Phone must have number digits' }
        ],
        'category': [{ type: 'required', message: 'Category is required' }],
        'details': [{ type: 'required', message: 'More details are required' }],
        'salutation': [{ type: 'required', message: 'Salutation is required' }],
        'mobile': [
            { type: 'required', message: 'Mobile No. is required' },
            { type: 'pattern', message: 'Mobile No. must be 10 digits' }
        ],
        'gender': [{ type: 'required', message: 'Gender is required' }],
        'pancard': [
            { type: 'required', message: 'Pan No. is required' },
            { type: 'pattern', message: 'Pan No. has invalid format' }

        ],
        'addressDetails': [
            { type: 'required', message: 'Address is required' },
            { type: 'pattern', message: 'Address has invalid characters' }
        ],
        'locality': [
            { type: 'required', message: 'Locality is required' }
        ],
        'city': [
            { type: 'required', message: 'City is required' },
            { type: 'pattern', message: 'City has invalid characters' }
        ],
        'district': [
            { type: 'required', message: 'District is required' },
            { type: 'pattern', message: 'District has invalid characters' }
        ],
        'state': [
            { type: 'required', message: 'State is required' },
            { type: 'pattern', message: 'State has invalid characters' }
        ],
        'pincode': [
            { type: 'required', message: 'Postal code is required' },
            { type: 'pattern', message: 'Postal code has invalid characters' }
        ],
        'dob': [
            { type: 'required', message: 'Date of Birth is required' },
            { type: 'pattern', message: 'Date of Birth has invalid pattern' }
        ]
    };
}