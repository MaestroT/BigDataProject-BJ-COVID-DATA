package cn.twr.web;
import cn.piaomz.jdbc.HiveUtil;
import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/test")
public class TestController {
    static List<String> names;

    @RequestMapping("/1")
    public String page1(){
        return "page1";
    }

    static{
        //一般加载自数据源，此处模拟数据
        names = new ArrayList<String>();
        names.add("吴亚尧");
        names.add("温鑫岩");
        names.add("郭雨丰");
        names.add("许荣榕");
        names.add("李昕蔚");
        names.add("王枭阳");
        names.add("董舸");
        names.add("郭利瑛");
        names.add("王燕妮");
        names.add("孙嘉俊");
        names.add("陈玉浩然");
        names.add("包迪");
        names.add("严康建");
        names.add("储志华");
        names.add("胡兆欣");
    }

    @RequestMapping("/getdata")
    @ResponseBody
    public String getDate(Integer index){
        return names.get(index);
    }

    @RequestMapping("/main")
    public String ajaxPage(){
        return "main";
    }



    @RequestMapping("/Con19")
    @ResponseBody
    public String Con191() throws SQLException, ClassNotFoundException {

        Class.forName("org.apache.hive.jdbc.HiveDriver");

        String url = "jdbc:hive2://192.168.239.201:10000/piaomzdb?characterEncoding=utf-8";
        String username = "root";
        String userpwd = "9934";
        Connection connection = DriverManager.getConnection(url, username, userpwd);

        String sql = "select * from bjCon19 where bjCon19.city='全市'";
        PreparedStatement preparedStatement = connection.prepareStatement(sql);
        ResultSet rs = preparedStatement.executeQuery();
        List<String> date=new ArrayList<String>();
        List<Integer> confirmed = new ArrayList<Integer>();
        List<Integer> suspected = new ArrayList<Integer>();
        List<Integer> dead = new ArrayList<Integer>();
        List<Integer> cured = new ArrayList<Integer>();

        JSONArray historys = new JSONArray();
        while(rs.next()){
            //System.out.println(rs);
            JSONObject history = new JSONObject();
            date.add(rs.getString(1));
            history.put("date",rs.getString(1));
            confirmed.add(rs.getInt(4));
            history.put("confirmed",rs.getString(4));
            suspected.add(rs.getInt(5));
            history.put("suspected",rs.getString(5));
            cured.add(rs.getInt(6));
            history.put("cured",rs.getString(6));
            dead.add(rs.getInt(7));
            history.put("dead",rs.getString(7));
            historys.appendElement(history);
        }


        JSONObject jsonObject = new JSONObject(); //创建Json对象
        JSONObject jsonObjectall = new JSONObject(); //创建Json对象
        jsonObject.put("date", date.get(date.size()-1));     //设置Json对象的属性
        jsonObject.put("confirmed", confirmed.get(confirmed.size()-1));
        jsonObject.put("suspected", suspected.get(suspected.size()-1));
        jsonObject.put("cured", cured.get(cured.size()-1));
        jsonObject.put("dead", dead.get(dead.size()-1));

        jsonObjectall.put("today",jsonObject);
        jsonObjectall.put("history",historys);

        sql = "select * from bjCon19 where day=\""+date.get(date.size()-1)+"\" and city!='全市'";
        //System.out.println(sql);
        preparedStatement = connection.prepareStatement(sql);
        rs = preparedStatement.executeQuery();
        JSONObject jsonObject2 = new JSONObject();
        while(rs.next()){
            //System.out.println(rs);
            JSONObject jsonObject3 = new JSONObject();
            jsonObject3.put("confirmed", rs.getString(4));
            jsonObject3.put("suspected", rs.getString(5));
            jsonObject3.put("cured", rs.getString(6));
            jsonObject3.put("dead", rs.getString(7));
            jsonObject2.put(rs.getString(3),jsonObject3);
        }
        jsonObjectall.put("todaydetail",jsonObject2);


        sql = "select * from bjCon19 where city='丰台区'";
        preparedStatement = connection.prepareStatement(sql);
        rs = preparedStatement.executeQuery();
        JSONArray historydetail = new JSONArray();
        while(rs.next()){
            //System.out.println(rs);
            JSONObject jsonObject3 = new JSONObject();
            jsonObject3.put("date", rs.getString(1));
            jsonObject3.put("confirmed", rs.getString(4));
            jsonObject3.put("suspected", rs.getString(5));
            jsonObject3.put("cured", rs.getString(6));
            jsonObject3.put("dead", rs.getString(7));
            historydetail.appendElement(jsonObject3);
        }
        jsonObjectall.put("historydetail",historydetail);

        preparedStatement.close();
        connection.close();
        System.out.println("success return");
        return jsonObjectall.toString();

    }

}
