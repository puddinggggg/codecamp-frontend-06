export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없음");
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큼(제한 5MB)");
    return false;
  }
  if (
    !(
      file.type.includes("jpeg") ||
      file.type.includes("png") ||
      file.type.includes("jpg") ||
      file.type.includes("gif")
    )
  ) {
    alert("이미지 파일만 업로드 가능");
    return false;
  }
  console.log("456");
  console.log(file);
  return file;
};
