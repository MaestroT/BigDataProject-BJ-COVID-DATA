package cn.twr.hive;

import java.sql.*;

/**
 * jdbc模板一：insert update delete
 */
class JdbcTest1 {

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        // 编写JDBC代码
        Class.forName("org.apache.hive.jdbc.HiveDriver");

        String url = "jdbc:hive2://192.168.239.201:10000/piaomzdb";
        String username = "root";
        String userpwd = "9934";
        Connection connection = DriverManager.getConnection(url, username, userpwd);

        String sql = "select * from testdata";
        //sql 注入问题
        PreparedStatement preparedStatement = connection.prepareStatement(sql);

        //提交数据库 执行sql
        ResultSet rs = preparedStatement.executeQuery();
        while(rs.next()){
            System.out.println(rs);
        }

        preparedStatement.close();
        connection.close();

    }
}
