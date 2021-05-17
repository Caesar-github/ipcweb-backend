#include <string.h>

#include "socket.h"

int rkipc_video_set(const char *json) {
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
