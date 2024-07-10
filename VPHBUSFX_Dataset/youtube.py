from pytube import YouTube

link = 'https://www.youtube.com/watch?v=ttcteNbqXho'

yt = YouTube(link)
streams = yt.streams
stream = streams.filter(file_extension='mp4', progressive="True").order_by('resolution').desc().first()
stream.download(output_path='', filename=f'clip10.mp4')