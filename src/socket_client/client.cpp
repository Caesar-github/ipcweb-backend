#include <string.h>

#include "socket.h"

int rk_isp_set(const char *json) {
  int fd;
  int len;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  len = strlen(json) + 1;
  sock_write(fd, &len, sizeof(int));
  sock_write(fd, json, len);

  sock_read(fd, &ret, sizeof(int));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_video_set(const char *json) {
  int fd;
  int len;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  len = strlen(json) + 1;
  sock_write(fd, &len, sizeof(int));
  sock_write(fd, json, len);

  sock_read(fd, &ret, sizeof(int));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_audio_set(const char *json) {
  int fd;
  int len;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  len = strlen(json) + 1;
  sock_write(fd, &len, sizeof(int));
  sock_write(fd, json, len);

  sock_read(fd, &ret, sizeof(int));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_isp_get_contrast(int cam_id, int *value) {
  int fd;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  sock_write(fd, &cam_id, sizeof(cam_id));
  sock_read(fd, value, sizeof(value));

  sock_read(fd, &ret, sizeof(ret));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_isp_set_contrast(int cam_id, int value) {
  int fd;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  sock_write(fd, &cam_id, sizeof(cam_id));
  sock_write(fd, &value, sizeof(value));

  sock_read(fd, &ret, sizeof(ret));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_isp_get_brightness(int cam_id, int *value) {
  int fd;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  sock_write(fd, &cam_id, sizeof(cam_id));
  sock_read(fd, value, sizeof(value));

  sock_read(fd, &ret, sizeof(ret));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_isp_set_brightness(int cam_id, int value) {
  int fd;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  sock_write(fd, &cam_id, sizeof(cam_id));
  sock_write(fd, &value, sizeof(value));

  sock_read(fd, &ret, sizeof(ret));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_isp_get_saturation(int cam_id, int *value) {
  int fd;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  sock_write(fd, &cam_id, sizeof(cam_id));
  sock_read(fd, value, sizeof(value));

  sock_read(fd, &ret, sizeof(ret));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_isp_set_saturation(int cam_id, int value) {
  int fd;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  sock_write(fd, &cam_id, sizeof(cam_id));
  sock_write(fd, &value, sizeof(value));

  sock_read(fd, &ret, sizeof(ret));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_isp_get_sharpness(int cam_id, int *value) {
  int fd;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  sock_write(fd, &cam_id, sizeof(cam_id));
  sock_read(fd, value, sizeof(value));

  sock_read(fd, &ret, sizeof(ret));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}

int rk_isp_set_sharpness(int cam_id, int value) {
  int fd;
  int ret = 0;

  fd = cli_begin((char *)__func__);
  /* Transmission parameters */
  sock_write(fd, &cam_id, sizeof(cam_id));
  sock_write(fd, &value, sizeof(value));

  sock_read(fd, &ret, sizeof(ret));
  /* End transmission parameters */
  cli_end(fd);

  return ret;
}