import React from 'react';
import Image from 'next/image';
import TenantIcon from '../public/icons/tenant-icon.svg';
import CameraIcon from '../public/icons/camera-icon.svg';
import TrashIcon from '../public/icons/trash-icon.svg';
import { useEffect } from 'react';
// import { useAppSelector } from '../app/hooks';

type Props = {
  [key: string]: any;
};

// New Tenant Image Upload  compnent.
const TenantImageUpload = (props: Props) => {
  // declaring props into variables.
  const isImage = props.isImage;
  const setIsImage = props.setIsImage;
  // select current Tenant data
  // const { currentTenant } = useAppSelector(selectTenantsData);

  // a handle funtion to handle Tenant logo
  const handleTenantLogo = (logo: any) => {
    if (!logo) {
      return TenantIcon;
    } else {
      return logo;
    }
  };
  // a handle funtion to handle image upload.
  const handleImageUpload = () => {
    const fileInput = document.getElementById('tenantLogo') as HTMLInputElement;
    fileInput.click();
  };
  // a handle funtion to handle setting a new Image.
  const handleChangeImage = () => {
    const fileInput: any = document.getElementById(
      'tenantLogo'
    ) as HTMLInputElement;
    const fReader = new FileReader();
    fReader.readAsDataURL(fileInput.files[0]);
    fReader.onloadend = (e: any) => {
      setIsImage(e.target?.result);
    };
  };
  // a handle funtion to handle delete tenant logo and set it to default image.
  const handleDeleteImage = () => {
    setIsImage(handleTenantLogo(null));
  };

  // a effect to set image to default on first render if there is no tenant logo.
  useEffect(() => {
    setIsImage(
      // handleTenantLogo(
      //   Object.entries(currentTenant).length !== 0
      //     ? currentTenant.company.company_logo
      //     : null
      // )
      handleTenantLogo(null)
    );
  }, []);

  return (
    <>
      <div className="d-flex flex-column text-center align-items-start">
        <div className="d-flex flex-column text-center align-items-center">
          <div className="d-flex align-items-center">
            <div>
              {props.isEditable && props.isEdit && (
                <a
                  className="btn btn-link text-decoration-none"
                  onClick={() => handleImageUpload()}>
                  <Image
                    alt="CameraIcon"
                    src={CameraIcon}
                    width={21}
                    height={21}
                  />
                </a>
              )}
              {!props.isEditable && (
                <a
                  className="btn btn-link text-decoration-none"
                  onClick={() => handleImageUpload()}>
                  <Image
                    alt="CameraIcon"
                    src={CameraIcon}
                    width={21}
                    height={21}
                  />
                </a>
              )}
              <input
                type="file"
                id="tenantLogo"
                name="tenantLogo"
                accept=".jpg, .jpeg, .png, .svg"
                hidden={true}
                onChange={() => handleChangeImage()}
              />
            </div>
            <div className="d-flex border rounded-circle p-3">
              <Image
                alt="TenantIcon"
                className=""
                src={isImage === '' ? TenantIcon : isImage}
                width={75}
                height={75}
              />
            </div>
            <div>
              {props.isEditable && props.isEdit && (
                <a
                  className="btn btn-link text-decoration-none"
                  onClick={() => handleDeleteImage()}>
                  <Image
                    id="imageContainer"
                    src={TrashIcon}
                    width={21}
                    height={21}
                    alt="TrashIcon"
                  />
                </a>
              )}
              {!props.isEditable && (
                <a
                  className="btn btn-link text-decoration-none"
                  onClick={() => handleDeleteImage()}>
                  <Image
                    alt="TrashIcon"
                    src={TrashIcon}
                    width={21}
                    height={21}
                  />
                </a>
              )}
            </div>
          </div>
          <div className="d-flex pt-2">
            <div className="fw-semibold">
              <p data-trans="">Organization Logo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantImageUpload;
