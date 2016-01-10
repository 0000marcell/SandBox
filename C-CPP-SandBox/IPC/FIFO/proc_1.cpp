#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
  int fd;
  char * myfifo = "/tmp/myfifo";
  mkfifo(myfifo, 0666);
  fd = open(myfifo, O_WRONLY);
  write(fd, "proc_1 says HI", sizeof("proc_1 says HI"));
  close(fd);
  unlink(myfifo);
  return 0;
}