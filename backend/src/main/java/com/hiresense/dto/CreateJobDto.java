package com.hiresense.dto;

import lombok.Data;

@Data
public class CreateJobDto {
    private String title;
    private String description;
    private String location;
    private String salary;
}
