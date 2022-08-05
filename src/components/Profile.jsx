import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Avatar from "react-avatar-edit";

export const Profile = () => {
  const [imageCrop, setImageCrop] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [src, setSrc] = useState(false);
  const [profile, setProfile] = useState([]);
  const [preview, setPreview] = useState(false);

  const profileFinal = profile.map((item) => item.preview);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const saveCropImage = () => {
    setProfile([...profile, { preview }]);
    setImageCrop(false);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: 40,
      }}
    >
      <div
        className="flex flex-column juscen alcen"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "200px",
            objectFit: "cover",
            border: "2px solid green",
          }}
          onClick={() => setImageCrop(true)}
          src={
            profileFinal.length
              ? profileFinal
              : "https://images.pexels.com/photos/3542148/pexels-photo-3542148.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
          alt="profile"
        />

        <label
          htmlFor=""
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "bolder",
            fontSize: "larger",
          }}
        >
          Jane Doe
        </label>
        <Dialog
          visible={imageCrop}
          header={() => {
            <p
              htmlFor=""
              style={{
                marginTop: 30,
                fontWeight: "bolder",
              }}
            >
              Upload Profile
            </p>;
          }}
          onHide={() => setImageCrop(false)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              width={500}
              height={500}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
              shadingColor={"#474649"}
              backgroundColor={"#474649"}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50",
                width: 120,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: 120,
                  marginTop: 40,
                }}
              >
                <Button
                  onClick={saveCropImage}
                  label="Save"
                  icon="pi pi-check"
                />
              </div>
            </div>
          </div>
        </Dialog>
        <InputText
          type="file"
          accept="/image/*"
          style={{ display: "none" }}
          onChange={(event) => {
            const file = event.target.file[0];
            if (file && file.type.substring === "image") {
              setProfileImage(file);
            } else {
              setProfileImage(null);
            }
          }}
        />
      </div>
    </div>
  );
};
