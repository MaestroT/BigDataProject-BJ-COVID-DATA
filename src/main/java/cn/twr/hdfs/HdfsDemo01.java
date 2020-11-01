package cn.twr.hdfs;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

//操作示例1
public class HdfsDemo01 {
    public static void main(String[] args) throws URISyntaxException, IOException {
        URI uri= new URI("hdfs://192.168.239.201");
        Configuration conf = new Configuration();
        conf.set("dfs.blocksize","1m");
        FileSystem hdfs= FileSystem.get(uri,conf);
        //FileSystem.newInstance();//异步
        //判断文件文件夹是否存在
        Path dir=new Path("/testdir");
        if(hdfs.exists(dir)){
            System.out.println("exist");
            hdfs.delete(dir,true);
        }else{
            System.out.println("not exist");
        }

        //上传数据
        if(!hdfs.exists(new Path("/test"))){
            hdfs.mkdirs(new Path("/test"));
        }
        hdfs.copyFromLocalFile(new Path("test.txt"),new Path("/test"));
        System.out.println("上传成功");
        //下载数据
        if(hdfs.exists(new Path("/test/test.txt"))){
            hdfs.copyToLocalFile(false,new Path("/test/test.txt"),new Path("download.txt"),true);
            System.out.println("下载成功!");
        }else{
            System.out.println("文件不存在，无法下载");
        }
        hdfs.close();
    }
}
